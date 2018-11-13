import { FLUID_GOAL, FLUID_INPUT_TODAY } from "../constants";

export default {
  getFluidGoal() {
    return parseFloat(window.localStorage.getItem(FLUID_GOAL)) || 0;
  },
  getFluidInputToday() {
    return parseFloat(window.localStorage.getItem(FLUID_INPUT_TODAY)) || 0;
  },
  setFluidGoal(fluidGoal) {
    window.localStorage.setItem(FLUID_GOAL, fluidGoal.toString());
  },
  setFluidInputToday(fluidInputToday) {
    window.localStorage.setItem(FLUID_INPUT_TODAY, fluidInputToday.toString());
  }
};