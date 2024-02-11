import { SpaceDTO } from "@/types/SpaceDTO";

export const createSpace = async (payload: SpaceDTO) => {
  try {
    window.localStorage.setItem(
      payload.spaceName.toLowerCase(),
      JSON.stringify({ ...payload, people: [] })
    );
  } catch (error) {
    console.log(error);
  }
};

// export const createSpace = async (payload) => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// }

// export const createSpace = async (payload) => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// }
