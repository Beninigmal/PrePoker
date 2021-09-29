import { db } from "../utils/firebaseUtils";

const DEFAULT_SPRINT = {
  name: "",
  days: 10.5,
  devs: 0,
  cards: 0,
};
const DEFAULT_CARD = {
  number: 0,
  cards: 0,
};

//Sprints

export const getSprints = async () => {
  const snapshot = await db.collection("sprints").get();
  return snapshot.docs.map((doc) => ({
    ...DEFAULT_SPRINT,
    ...doc.data(),
    id: doc.id,
  }));
};

export const getSprintById = (id) => {
  return db
    .collection("sprints")
    .doc(id)
    .get()
    .then((resp) => ({
      ...DEFAULT_SPRINT,
      ...resp.data(),
      id,
    }));
};

export const createSprint = (sprint) => {
  return db.collection("sprints").add(sprint);
};

export const updateSprint = (sprint) => {
  return db.collection("sprints").doc(sprint.id).update(sprint);
};

export const deleteSprintById = (id) => {
  return db.collection("sprints").doc(id).delete();
};

// History Cards
export const createCard = (sprintId, card) => {
  return db.collection(`sprints/${sprintId}/cards`).add(card);
};

export const getCards = async (id) => {
  const cards = await db
    .collection(`sprints`)
    .doc(id)
    .collection(`cards`)
    .get();
  return cards.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
