import { atom } from "recoil"

// atom엔 두 가지 속성이 들어간다. key:전역적으로 유일한 값, default
export const Atom = atom({
	key: "Atom",
	default: [],
})
