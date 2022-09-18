import { mount } from '@vue/test-utils';
import { vi } from 'vitest';
import EthereumAddress from './EthereumAddress.vue';

// Testing purpose ethereum address
const testingAddress = '0x839Be166ee5Ac99309C0A0796867942822a5E8BE';
// testid reference tag
const referenceLabel = '[data-testid="ethereumAddress"';
// Etherscan url from environmend
const ETHERSCAN_URL = import.meta.env.VITE_APP_ETHERSCAN_URL;

// Mock global window.open
vi.stubGlobal('open', vi.fn());

describe('EthereumAddress Component', () => {
  it('render address passed as prop', async () => {
    // Render component
    const wrapper = mount(EthereumAddress, {
      props: {
        address: testingAddress
      }
    });

    // Verify
    expect(wrapper.text()).toBe(testingAddress);
  })

  it('click address and verify if a new tab was opened', async () => {
    // Render component
    const wrapper = mount(EthereumAddress, {
      props: {
        address: testingAddress
      }
    });
    // Create spy for testing if window.open was called
    const spy = vi.spyOn(window, 'open');

    // Act: click on the address
    wrapper.find(referenceLabel).trigger('click')

    // Verify if window.open was called
    expect(spy).toBeCalledWith(`${ETHERSCAN_URL}${testingAddress}`, '_blank');
  })
})