import { MemberDTO } from "@/types/MemberDTO";
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

export const getSpace = async (spaceId: string) => {
  try {
    const info = window.localStorage.getItem(spaceId);
    return JSON.parse(info || "{}");
  } catch (error) {
    console.log(error);
  }
};

export const createMember = async (spaceId: string, payload: MemberDTO) => {
  try {
    const spaceInfo = await getSpace(spaceId);
    window.localStorage.setItem(
      spaceId?.toLowerCase(),
      JSON.stringify({
        ...spaceInfo,
        people: ([] as { [x: string]: any })
          .concat(spaceInfo?.people || [])
          .concat([{ ...payload, pairedWith: null }]),
      })
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
