class Product {
    constructor(row) {
        this.id = row.id
        this.name = row.name
        this.description = row.description
        this.price = row.price
        this.category_id = row.category_id
    }
    static map(dbRows) {
        const rows = []
        for (const row of dbRows) {
            const product = new Product(row)
            rows.push(product)
        }
        return rows
    }
}

module.exports = Product