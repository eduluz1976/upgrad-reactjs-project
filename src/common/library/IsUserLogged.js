

export default function IsUserLogged() {

    const userData = sessionStorage.getItem('user-profile');

    try {
        const userDataDecoded = JSON.parse(userData);
        // console.log('userData',userData);

        if (userDataDecoded) {
            return true;
        }        
    } catch (error) {
        console.log(error);
    }
    

    return false;
}