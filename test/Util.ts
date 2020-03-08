import ava from 'ava';
import util from '../dist';

ava('sample test', (test): void => {
	test.is(util(), 'bar');
});
