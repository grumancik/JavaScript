var read = require('read');

function Information (name, address, phone) {
	this.name = name;
	this.address = address;
	this.phone = phone;
}

Information.prototype.toString = function () {
	return this.name + " lives at " + this.address + " and can be reached at " + this.phone;
};

var contact = new Information();

read({ prompt: 'Name? '}, getName);

    function getName (err, result) {
    	contact.name = result;
     
      read({prompt: 'Address? '}, getAddress);
    };

    function getAddress (err, result) {
    	contact.address = result;
   
       read({prompt: 'Number? '}, getPhone);
    };

    function getPhone (err, result) {
    	contact.phone = result;

console.log(contact.toString());

};
