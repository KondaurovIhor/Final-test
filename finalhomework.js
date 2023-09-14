describe("final", () => {
xit("Registration", async () => {
    await browser.url('https://github.com/');
    await browser.url('https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home');
    await browser.pause(4000)

    let input = await $("#email")
    await input.addValue("example1223@gmail.com")
    await browser.pause(2000)

    let loginButton = await $('//*[@id="email-container"]/div[2]/button')
    await browser.pause(2000)
    await loginButton.click()
    await browser.pause(4000)

    let inputPassword = await $("#password")
    await inputPassword.addValue("127361827361836")
    await browser.pause(2000)

    let loginButon = await $('//*[@id="password-container"]/div[2]/button')
    await browser.pause(2000)
    await loginButon.click()
    await browser.pause(4000)

    let inputUsername = await $("#login")
    await inputUsername.addValue("Kondaurovv")
    await browser.pause(2000)

    let loginBtn = await $('//*[@id="username-container"]/div[2]/button')
    await browser.pause(2000)
    await loginBtn.click()
    await browser.pause(3000)

    let inputText = await $("#opt_in")
    await inputText.addValue("y")
    await browser.pause(2000)

    let loginBttn = await $('//*[@id="opt-in-container"]/div[2]/button')
    await browser.pause(2000)
    await loginBttn.click()
    await browser.pause(3000)
});

xit("Test 2 ", async () => {
        await browser.url('https://github.com/');
        const getStartedLink = await $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')
    await browser.pause(2000)
    await getStartedLink.scrollIntoView()
    await browser.pause(2000)

    const getStartedButton = await $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')
    let isEnabled = await getStartedButton.isEnabled()
    console.log("Is get started button enabled: " + isEnabled) //outputs: true

    const blogButton = await $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')
    let displayedInViewport = await blogButton.isDisplayedInViewport()
    console.log("Is blog button displayed in viewport: " + displayedInViewport) //outputs: true

    let loginButton = await $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')
    await browser.pause(2000)
    await loginButton.click()
    await browser.pause(4000)

    const getStartedButon = await $('/html/body/div[1]/div[4]/main/div/div[1]/h1')
    let isEnabled2 = await getStartedButon.isEnabled()
    console.log("Is get started button enabled: " + isEnabled2) //outputs: true

let loginBtn = await $('a[href="/account/enterprises/new?ref_cta=Enterprise%2520Cloud&ref_loc=choose_an_enterprise_plan&ref_page=%2Forganizations%2Fenterprise_plan%3Fref_cta%3DStart%2Ba%2Bfree%2Benterprise%2Btrial%26ref_loc%3DHome%2Bcampaign%2Bfooter%26ref_page%3D%252F"]')
    await browser.pause(2000)
    await loginBtn.click()
    await browser.pause(4000)
    });

xit("Footer ", async () => {
        await browser.url('https://github.com/');
        const getStartedLink = await $('a[href="https://resources.github.com/newsletter/"]')
    await browser.pause(2000)
    await getStartedLink.scrollIntoView()
    await browser.pause(2000)

    const blogButton = await $('a[href="https://resources.github.com/newsletter/"]')
    let clickable = await blogButton.isClickable()
    console.log("Is clicable: " + clickable) //outputs: true

    let loginButton = await $('a[href="https://resources.github.com/newsletter/"]')
    await browser.pause(2000)
    await loginButton.click()
    await browser.pause(4000)

    const title = await browser.getTitle()
        console.log(title)      
        await expect(browser).toHaveTitle('GitHub - Newsletter Sign-up | GitHub Resources - GitHub Resources')

        const getStartedButon = await $('/html/body/div/div/main/div/section[1]/div/div/section/h1')
    let isEnabled2 = await getStartedButon.isEnabled()
    console.log("Is get started button enabled: " + isEnabled2) //outputs: true

    let input = await $('//*[@id=":R8d7m:"]')
    await input.addValue("example1223@gmail.com")
    await browser.pause(2000)

    let loginButon = await $('//*[@id="country"]')
    await browser.pause(2000)
    await loginButon.click()
    await browser.pause(4000)

    let loginBtn = await $('//*[@id="country"]/option[225]')
    await browser.pause(2000)
    await loginBtn.click()
    await browser.pause(4000)

    let loginBtn2 = await $("#gated-agree-marketingEmailOptin1")
    await browser.pause(2000)
    await loginBtn2.click()
    await browser.pause(4000)

    let loginBtn3 = await $('//*[@id="form"]/form/div/button/span[1]/span')
    await browser.pause(2000)
    await loginBtn3.click()
    await browser.pause(4000)
});

it("Send a search request with a Car", async () => {
    await browser.url('https://github.com/');
    let loginButton = await $('span.flex-1')
await browser.pause(2000)
await loginButton.click()
await browser.pause(4000)

let inputSearch = await $("#query-builder-test")
await inputSearch.addValue("Car")
await browser.pause(2000)

let loginButon = await $('//*[@id="query-builder-test-result-car"]/span/span[2]/span')
await browser.pause(2000)
await loginButon.click()
await browser.pause(4000)

let subtitle = await $('a[href="/mitre-attack/car"]')
    console.log("Subtitle text is: " + await subtitle.getText()) //outputs: ...car
});

it("Final test", async () => {
    await browser.url('https://github.com/');
    let loginButton = await $('a[href="/pricing"]')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        const getStartedButon = await $('/html/body/div[1]/div[4]/main/div[1]/h1')
    let isEnabled = await getStartedButon.isEnabled()
    console.log("Is get started button enabled: " + isEnabled) //outputs: true

    const getStartedLink = await $('a[href="#compare-features"]')
    await browser.pause(2000)
    await getStartedLink.scrollIntoView()
    await browser.pause(2000)

    let loginButon = await $('a[href="#compare-features"]')
    await browser.pause(2000)
    await loginButon.click()
    await browser.pause(4000)

    const getStartedButton = await $('/html/body/div[1]/div[4]/main/div[4]/h1')
    let isEnabled2 = await getStartedButton.isEnabled()
    console.log("Is get started button enabled: " + isEnabled2) //outputs: true

});
})