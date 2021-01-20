
export const CallData = async (data) => {
    var callAPi = await fetch(`/api/sendmail`, {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if (res.status === 200) {
            return true
        } else {
            return false
        }
    }).catch((error) => {
        console.log(error);
        if (error) {
            return false
        }
    });
    return callAPi;
}