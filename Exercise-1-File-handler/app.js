const fileHandler = require("./file-handler");
const userInput = require("./user-input");

async function main(){
    try {
        const firstName = await userInput.getValue("Enter your first name : ");
        const lastName = await userInput.getValue("Enter your last name : ");
        const email = await userInput.getValue("Enter your email : ");
        const phoneNumber = await userInput.getValue("Enter your phone number : ");
        const adress = await userInput.getValue("Enter your adress : ");
        const creditCardNum = await userInput.getValue("Enter your credit card number : ");

        await fileHandler.write("./User-Info.txt" ,
         "Full name : " + firstName + " " + lastName + "\n" +
         "Email : " + email + "\n" +
         "Phone number : " + phoneNumber + "\n" +
         "Adress : " + adress + "\n" +
         "Credit card number : " + creditCardNum + "\n"
         );

         const content = await fileHandler.read("./User-Info.txt");
         console.log("-------- User Info : ------" + "\n" + content);

    } catch (error) {
        console.log(error);
    }
    finally {
        userInput.close();
    }
}

main();