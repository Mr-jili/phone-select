import http from "./http"

const SCHEMECODE = "LTSW"

export const getSensitiveOptions = (params) => {
	return http.get("ccs/menu/user/sensitive-options", {
		params
	})
}