'use strict'

const { Command } = require('@adonisjs/ace')

class SeedRdb extends Command {
    static get signature() {
        return 'seed:rdb'
    }

    static get description() {
        return 'Tell something helpful about this command'
    }

    async handle(args, options) {
        this.info('Dummy implementation for seed:rdb command')
    }
}

module.exports = SeedRdb
