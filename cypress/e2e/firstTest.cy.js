

describe('FirstTest', () => {
  const token = 'abcd12345'
/*const navBarText = Cypress.env('navBarText')
  before( () => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length',10)
  })
  beforeEach( () => {
    cy.visit('/')
  })
  it('checking the page title', () => {
    
    cy.get('title').should('contain.text','Cypress.io: Kitchen Sink');
  })
  it('checking header exists', () => {

    cy.get('h1').should('exist');
  })
  afterEach( () => {
    cy.log('after each test')
  })
  after( () =>{
    cy.log('after all the test')
  })
 /* it('checking the header text',() => {

    cy.get('h1').should('contain.text','Actions')
  
  })
  it('checking the paragraph in the header',() => {
    
    cy.get('.container').eq(1).find('p').should('exist');
  
  })
  it('checking the paragraph in the other container',() => {
    
    cy.get('.container').eq(2).within(() => 
    {
      cy.get('h4').should('exist');
      cy.get('p').should('exist');

    })
  
  })
  it('checkig the find by text', () => {
    cy.findByText(navBarText).should('exist')
  })*/
  /*it('enter the details in the form', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('mounika.vasanthi@gmail.com')
    cy.wait(5000).then(() =>
    {
      fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((data) => 
        console.log(data)
      )
      
    })
  })
  it('verify active class', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
  })
  it('verify first li', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').first().should('not.have.class','active').find('a').should('have.attr','href','/commands/querying')
    
  })
  it('verify second li', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(1).should('have.text','Traversal')
    
  })
  it('click on actions', () => {
    cy.visit('/')
    cy.findAllByText('Actions').first().click({force:true})
    cy.url().should('include','commands/actions')
    
  })
  it('type in input field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('mounika.vasanthi@gail.com').should('have.value','mounika.vasanthi@gail.com')
    
  })
  it('clear the input field', () => {
    cy.visit('/commands/actions')
    cy.findByLabelText('Describe:').type('test desc',{force:true}).should('have.value','test desc')
    .clear().should('have.value','')
    
  })
  it('verify the field is disabeld', () => {
    cy.visit('/commands/actions')
    cy.get('.action-disabled').should('be.disabled')
    // Ignore error checking prior to type
    // like whether the input is visible or disabled
    .type('disabled error checking', { force: true })
    .should('have.value', 'disabled error checking')
    
  })
  it('check the checkboxes', () => {
    cy.visit('/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check(['checkbox1','checkbox3']).should('be.checked')
    cy.get('.action-checkboxes [type="checkbox"]').eq(1).should('be.disabled').check({force:true}).should('be.checked')
    
    
  })*/
 // ------------ mocking request------------------
 /* beforeEach(() => {
    cy.fixture('example').then( function (data) {
      this.data = data;
      cy.log ('Data:' , this.data)
    })
  })
/*it('using fixtures' , () => {
  cy.fixture('example').then((data) => {
    cy.log ('Data :', data)
  })

})
it('update the fixture data', () => {
  cy.fixture('example').then( (data) => {
    data.email = 'updated@mail.com'
    cy.log ('Data:' , data)

  })
})
it('uses fixture data in network request', function() {
  cy.visit('/commands/network-requests')
  cy.intercept('GET', '/comments/*', this.data).as('gc')
  cy.get('.network-btn').click()
  cy.wait('@gc').then((res) => {
    cy.log('Response:', res)
  })
})
//-----------------custom commands--------------
it('set a token to local storage', () => {
  cy.setLocalStorage('token',token)
  cy.getLocalStorage('token').should('eq',token)
})

it('overwrites the sensitive information', () => {
  cy.visit('/commands/actions')
  cy.findByPlaceholderText('Email').type('mounika.vasanthi@gmail.com')
  cy.findByPlaceholderText('Email').type('mounika.vasanthi@gmail.com',{sensitive : true})
})
beforeEach( () => {
  cy.visit('/commands/actions')
})
it('popover on clicking the toglge button', () => {
  cy.findByRole('button', {name: /Click to toggle popover/i}).click()
  cy.findByText('This popover shows up on click').should('be.visible')
})
it('click on canvas', () => {
  cy.get('#action-canvas').click('top')
  cy.get('#action-canvas').click('bottomRight')
  cy.get('#action-canvas').click(80,100)
})

it('double click', () => {
  cy.get('.action-div').dblclick().should('not.be.visible')
  cy.get('.action-input-hidden').should('be.visible').type('Mounika')
})

it('right click to edit', () => {
  cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
  cy.get('.rightclick-action-input-hidden').should('be.visible').type('Mounika')
})
it('shows the list on over' , () => {
  cy.visit('/')
  cy.get('.dropdown-toggle').trigger('mouseover')
  cy.get('.dropdown-menu').should('be.visible')
})*/

})
