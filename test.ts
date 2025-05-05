import assert from 'node:assert';
import { describe, it } from 'node:test';

const TASK_PREPEND_LICENSE = 'prepend-license';
const HEADER_BASE = '// SPDX-License-Identifier:';

const c = async (d: string) => {
    return "";
};

describe("a", () => {
    it('b', async () => {
        assert("".includes(HEADER_BASE));

        await c('ContractWithoutLicense');
    });
});
