import config from "../../config";


export default async function AuthLoginService(parms) {

     
    console.log("AuthLoginService", parms, config);

    
    const authorization = "Basic "+ window.btoa(`${parms.email}:${parms.password}`);

    const headers = {
        "Accept": "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: authorization
      };

      const request = {
        method: "POST",
        headers: headers
    };
      const rawResult = await fetch(config.baseUrl + "auth/login", request);

      const json = await rawResult.json();

      console.log('after login',json);

      if (json['id'] && json['status'] && json['status'] == 'ACTIVE') {        
        
        return {userData: json, success: true, accessToken: rawResult.headers.get('access-token')};
      } else {
        throw new Error(json.message);
        //return {message: json.message, success: false};
      }


    
}