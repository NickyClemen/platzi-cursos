import gravatar from '../../utils/gravatar';

test('gravatar function test', () => {
    const email = 'nicole.ordoqui@gmail.com';
    const gravatarUrl = 'https://gravatar.com/avatar/bda0369d2891eb6e033c8e68b4504354';

    expect(gravatarUrl).toEqual(gravatar(email));
});