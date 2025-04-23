const mongoose = require("mongoose");
const { Account } = require("../models");

exports.getBalance = async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.userId });
    if (!account) return res.status(404).json({ message: "Account not found" });

    res.status(200).json({ balance: account.balance });
  } catch {
    res.status(500).json({ message: "Failed to fetch balance" });
  }
};

exports.transfer = async (req, res) => {
  const { to, amount } = req.body;
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const sender = await Account.findOne({ userId: req.userId }).session(
      session
    );
    if (!sender || sender.balance < amount) {
      await session.abortTransaction();
      return res
        .status(400)
        .json({ message: "Insufficient funds or account not found" });
    }

    const receiver = await Account.findOne({ userId: to }).session(session);
    if (!receiver) {
      await session.abortTransaction();
      return res.status(404).json({ message: "Receiver not found" });
    }

    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();
    res.status(200).json({ message: "Transfer successful" });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({ message: "Transfer failed", error: error.message });
  } finally {
    session.endSession();
  }
};
