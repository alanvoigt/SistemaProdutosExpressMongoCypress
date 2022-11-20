describe('Post and Get', () => {
  it('Delete All Products', () => {
    cy.request({
        method: "DELETE",
        url: "http://localhost:3000/api/removeAllProducts",
    }).then((res) => {
        expect(res.status).to.be.equal(201)
    })
    
})

    it('Post', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/api/product",
            body: {
              name: "Test123",
              quantity: 10,
              description: "Good Product",
              owner: "Alan",
            },
        }).then((res) => {
            expect(res.status).to.be.equal(201)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('owner', 'Alan')
        })
        
   })

   it('Get', () => {
    cy.request({
        method: "GET",
        url: "http://localhost:3000/api/product",
    }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body[0]).to.have.property('owner', 'Alan')
    })
    
})
})
