const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case "getById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "removeById":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// program
//   .option("-a, --action <type>")
//   .option("-i, --id <type>")
//   .option("-n, --name <type>")
//   .option("-e, --email <type>")
//   .option("-p, --phone <type>");

// program.parse();

// const options = program.opts();
// invokeAction(options);

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);
