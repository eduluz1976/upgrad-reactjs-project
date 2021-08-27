import config from "../../config";


export default async function AuthSignupService(parms) {

     

    
    const body = {        
            "email_address": parms.email,
            "first_name": parms.firstName,
            "last_name": parms.lastName,
            "mobile_number": parms.contactNumber,
            "password": parms.password        
    };

    const headers = {
        "Accept": "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8"
      };

      const request = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    };
      const rawResult = await fetch(config.baseUrl + "signup", request);

      const json = await rawResult.json();

      if (json['id'] && json['status'] && json['status'] == 'ACTIVE') {
        return {message: "Registration Successful. Please Login!", success: true};
      } else {
        return {message: json.message, success: false};
      }


    
}
