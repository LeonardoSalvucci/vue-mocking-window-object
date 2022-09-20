import EthereumAddress from './EthereumAddress.vue';

// Testing purpose ethereum address
const testingAddress = '0x839Be166ee5Ac99309C0A0796867942822a5E8BE';
// testid reference tag
const referenceLabel = '[data-testid="ethereumAddress"';
// Etherscan url from environmend
const ETHERSCAN_URL = 'https://etherscan.io/address/';

describe('<EthereumAddress />', () => {

  it('render with correct address', () => {
    cy.mount(EthereumAddress, {
      props: {
        address: testingAddress
      }
    });

    cy.get(referenceLabel).should('have.text', testingAddress);
  });

  it('onpen new tab when click', () => {
    cy.mount(EthereumAddress, {
      props: {
        address: testingAddress
      }
    });

    cy.window().then((win) => {
      cy.spy(win, 'open').as('redirect');
    })

    cy.get(referenceLabel).click();

    cy.get('@redirect').should('be.calledWith',`${ETHERSCAN_URL}${testingAddress}`, '_blank');
  });
})