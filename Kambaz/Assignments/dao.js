import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
}

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
};

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}
