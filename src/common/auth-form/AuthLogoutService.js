import config from "../../config";


export default async function AuthLogoutService(parms) {

     
    console.log("AuthLogoutService", parms, config);
    
    const authorization = "Bearer "+ parms.accessToken;

    const headers = {
        "Accept": "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: authorization
      };

      const request = {
        method: "POST",
        headers: headers
    };
      const rawResult = await fetch(config.baseUrl + "auth/logout", request);

      return rawResult;

    
}