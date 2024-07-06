class Category {
    constructor(row) {
        this.id = row.id
        this.name = row.name
        this.code = row.code
        this.deleted = row.deleted
        this.parent_id = row.parent_id
    }
    static map(dbRows) {
        const rows = []
        for (const row of dbRows) {
            const category = new Category(row)
            rows.push(category)
        }
        return rows
    }
}

module.exports = Category