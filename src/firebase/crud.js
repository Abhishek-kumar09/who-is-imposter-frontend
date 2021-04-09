import firebase, { firestore as db } from "./index";

export function add(collection, doc, data) {
  db.collection(collection)
    .doc(doc)
    .set(data)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

export async function getData(collection, setData) {
  const dataArray = [];
  db.collection(collection)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const auctionData = doc.data();
        dataArray.push({ ...dataArray, ...auctionData });
      });
    })
    .catch((e) => {
      console.log(e);
    });
  setData(dataArray);
}

function addComment(uid, data) {}
