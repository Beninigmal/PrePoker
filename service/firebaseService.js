import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore/lite";
import { db } from "../utils/firebaseUtils";

const DEFAULT_SPRINT = {
  name: "",
  days: 10.5,
  devs: 0,
};

export const getSprints = async () => {
  const sprintCollection = collection(db, "sprints");
  const sprintSnapshot = await getDocs(sprintCollection);
  return sprintSnapshot.docs.map((doc) => ({
    ...DEFAULT_SPRINT,
    ...doc.data(),
    id: doc.id,
  }));
};

export const getSprintById = (id) => {
  return getDoc(doc(db, "sprints", id)).then((resp) => ({
    ...DEFAULT_SPRINT,
    ...resp.data(),
    id,
  }));
};

export const createSprint = (sprint) => {
  const sprintCollection = collection(db, "sprints");
  return addDoc(sprintCollection, sprint);
};

export const updateSprint = (sprint) => {
  console.log(sprint);
  return setDoc(doc(db, "sprints", sprint.id), sprint);
};

export const deleteSprintById = (id) => {
  return deleteDoc(doc(db, "sprints", id));
};
