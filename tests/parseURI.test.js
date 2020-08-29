import * as lbryURI from '../src/lbryURI.js';
import {describe, test} from "@jest/globals";

describe('parseURI tests', () => {

    test('Correctly parses channel URI', () => {
        let result = lbryURI.parseURI('lbry://@ChannelName');
        expect(result.isChannel).toBeTruthy();
        expect(result.path).toStrictEqual("@ChannelName");
        expect(result.channelName).toStrictEqual("ChannelName");
        expect(result.claimName).toStrictEqual("@ChannelName");
    });

    test('Correctly parses test case channel/stream lbry URI', () => {
        let result = lbryURI.parseURI('lbry://@CryptoGnome#1/whale-pool-how-to#e');
        expect(result.isChannel).toStrictEqual(false);;
        expect(result.path).toStrictEqual("@CryptoGnome#1/whale-pool-how-to#e");
        expect(result.claimId).toStrictEqual("1");
        expect(result.streamClaimId).toStrictEqual("e");
        expect(result.streamName).toStrictEqual("whale-pool-how-to");
        expect(result.channelName).toStrictEqual("CryptoGnome");
        expect(result.contentName).toStrictEqual("whale-pool-how-to");
    });

    test('Correctly parses lbry URI without protocol', () => {
        let result = lbryURI.parseURI('@CryptoGnome#1/whale-pool-how-to#e');
        expect(result.isChannel).toStrictEqual(false);;
        expect(result.streamName).toStrictEqual("whale-pool-how-to");
        expect(result.channelName).toStrictEqual("CryptoGnome");
    });

    test('Throws error for http protocol', () => {
        // TODO - this catches wrong type of error..
        let uri = 'http://@CryptoGnome#1/whale-pool-how-to#e';
        expect(() => lbryURI.parseURI(uri)).toThrowError();
    });

    test('Correctly parses search', () => {
        let result = lbryURI.parseURI('CryptoGn%ome');
        expect(result.isChannel).toStrictEqual(false);
        expect(result.path).toStrictEqual("CryptoGn%ome");
        expect(result.contentName).toStrictEqual("CryptoGn%ome");
    });
})
