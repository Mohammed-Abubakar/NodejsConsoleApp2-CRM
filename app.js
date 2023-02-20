// This is a basic Customer Relationship Management (CRM) Software code

// Define the Customer class
class Customer {
    constructor(name, email, phone, address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}

// Define the Contact class
class Contact {
    constructor(customer, date, note) {
        this.customer = customer;
        this.date = date;
        this.note = note;
    }
}

// Define the Task class
class Task {
    constructor(title, dueDate, assignee, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.assignee = assignee;
        this.priority = priority;
    }
}

// Define the Lead class
class Lead {
    constructor(name, email, phone, company, source) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.company = company;
        this.source = source;
    }
}

// Define the Report class
class Report {
    constructor(startDate, endDate, type) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
    }
}

// Define the CRM class
class CRM {
    constructor() {
        this.customers = [];
        this.contacts = [];
        this.tasks = [];
        this.leads = [];
        this.reports = [];
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    addTask(task) {
        this.tasks.push(task);
    }

    addLead(lead) {
        this.leads.push(lead);
    }

    addReport(report) {
        this.reports.push(report);
    }
}

// Create a new instance of the CRM class
const myCRM = new CRM();

// Add a new customer
const myCustomer = new Customer('John Doe', 'johndoe@example.com', '555-1234', '123 Main St.');
myCRM.addCustomer(myCustomer);

// Add a new contact
const myContact = new Contact(myCustomer, new Date(), 'Follow up in 2 weeks');
myCRM.addContact(myContact);

// Add a new task
const myTask = new Task('Call John Doe', new Date('2023-02-20'), 'Jane Smith', 'High');
myCRM.addTask(myTask);

// Add a new lead
const myLead = new Lead('Sara Johnson', 'sara@example.com', '555-5678', 'ABC Inc.', 'Referral');
myCRM.addLead(myLead);

// Add a new report
const myReport = new Report(new Date('2023-02-01'), new Date('2023-02-28'), 'Sales by region');
myCRM.addReport(myReport);
