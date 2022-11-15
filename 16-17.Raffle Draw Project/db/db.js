const Ticket = require('../models/Ticket')

class MyDB{
    constructor() {
        this.tickets = []
    }

    /**
     * create and save new ticket
     * @param {string} username 
     * @param {number} price 
     * @return {Ticket} return a ticket object
     */
    create(username, price) {
        const ticket = new Ticket(username, price)
        this.tickets.push(ticket)
        return ticket;
    }

    /**
     * create multiple ticket for a single user
     * @param {string} username 
     * @param {number} price 
     * @param {number} qantity 
     * @return {Ticket}
     */
    bulkCreate(username, price, qantity) {
        const result = []
        for(let i = 0; i < qantity; i++) {
            const ticket = this.create(username, price)
            result.push(ticket)
        }

        return result
    }

    /**
     * return all available tickets
     */
    find() {
        return this.tickets;
    }

    /**
     * find ticket by ticket id
     * @param {string} ticketId 
     * @return {Ticket} 
     */
    findById(ticketId) {
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.id === ticketId
        );
        return ticket
    }

    /**
     * find all tickets for a given user 
     * @param {String} username 
     * @return {Array<Ticket>} 
     */
    findByUsername(username) {
        const ticket = this.tickets.filter(
            /**
             * @param {Ticket} ticket 
             */
            (ticket) => ticket.username === username
        );
        return ticket
    }

    /**
     * update ticket info
     * @param {string} ticketId 
     * @param {{username: string, price: number}} ticketBody 
     * @returns {Ticket}
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updatedAt = new Date();

        return ticket;
    }

    /**
     * delete ticket from db
     * @param {string} ticketId 
     */
    deletById(ticketId) {
        const index = this.tickets.findIndex(
            (ticket) => ticket.id === ticketId
        )

        if(index !== -1) {
            this.tickets.splice(index, 1)
            return true
        }
        return false
    }

    /**
     * find winners
     * @param {number} winnerCount 
     * @return {Array<Ticket>} 
     */
    draw(winnerCount) {
        let winnerIndexes = new Array(winnerCount)
        
        let index = 0;
        while(index < winnerCount) {
            let winnerindex = Math.floor(Math.random() * this.tickets.length)
            if(!winnerIndexes.includes(winnerindex)) {
                winnerIndexes[index++] = winnerindex
                continue;
            }
        }
        const winners = winnerIndexes.map((index) => this.tickets[index])
        return winners
    }
}

const myDB = new MyDB();
module.exports = myDB;