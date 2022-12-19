import {Address, BigDecimal, BigInt, dataSource, log} from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export let DAY = BigDecimal.fromString('86400')

const network = dataSource.network();

// ***********************************************************************
//                    IMPLEMENT FOR EACH NETWORK
// ***********************************************************************

// minimum liquidity for price to get tracked = 0.01 ETH
export const MINIMUM_LIQUIDITY_THRESHOLD_USD = BigDecimal.fromString('100')

export function wethAddress(): Address {
    return Address.fromString(ADDRESS_ZERO); //todo
}

export function usdcAddress(): Address {
  return Address.fromString('0xD0d692287EA897a11eBE5b011a006D5d7ffC43fC');
}

export function usdcWethPairAddress(): Address {
  return Address.fromString(ADDRESS_ZERO);//todo
}

// token where amounts should contribute to tracked volume and liquidity
export function whitelisted(): Address[] {
    return [
      Address.fromString('0xD0d692287EA897a11eBE5b011a006D5d7ffC43fC'), // USDC
      Address.fromString('0xE99500AB4A413164DA49Af83B9824749059b46ce'), // WXDC
      Address.fromString('0x49eBd4a0b8a4D498CA9b30Ee94111306cd71ac04'), // MIM
      Address.fromString('0x777c400c02cbb0899a0823f77aa7F3FaC376901b'), // DAI
      Address.fromString('0xc299e3c09458C092081D885f85f545F800FCb85b'), // USDT
    ]
}

export function stablecoins(): Address[] {
    return [
      Address.fromString('0xD0d692287EA897a11eBE5b011a006D5d7ffC43fC'), // USDC
      Address.fromString('0x777c400c02cbb0899a0823f77aa7F3FaC376901b'), // DAI
      Address.fromString('0xc299e3c09458C092081D885f85f545F800FCb85b'), // USDT
    ]
}