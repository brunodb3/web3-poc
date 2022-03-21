// @todo
// - get an LTO account (for a main account)
// - make an association tx between the LTO account and the Ethereum account
// - sign and broadcast the transaction
//        could potentially just do REST requests to a node, where the node signs the transaction...

const web3 = new Web3(Web3.givenProvider);
const web3Account = web3.eth.accounts.create();

const lto = new LTO.LTO("T");
const factory = LTO.AccountFactoryED25519;
const association = LTO.Association;
const encoder = LTO.encoder;

const ltoAccount = new factory("T").createFromSeed(
  "element hello pluck double cheese load genre put parade tip swing crack slam erosion rich"
);
const testAccount = new factory("T").create();

console.log("ltoAccount", ltoAccount);
console.log("testAccount", testAccount);
console.log("web3Account", web3Account);

// @todo: create a new ltoAccount using the private key from web3Account for the recipient

console.log("encoded", encoder.encode(web3Account.adddress));

const transaction = new association(testAccount.address, 100);

// transaction.signWith(ltoAccount);

console.log("transaction", transaction);

// const transaction = lto.fromData({
//   type: 16,
//   sender: ltoAccount.address,
//   recipient: web3Account.address,
// });

// console.log("transaction", transaction);

// const res = await httpPost({
//   hostname: "testnet.lto.network",
//   path: "/transactions/broadcast",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(transaction),
// });

// const identity = new LTO.IdentityBuilder(ltoAccount.address);

// identity.addVerificationMethod(web3Account.address, 1);

// for (const transaction of identity.transactions) {
//   console.log("transaction", transaction);
//   // delete transaction.id;
// }
