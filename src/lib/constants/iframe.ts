const IFRAME_INIT = {
    namespace: "embedded-financing",
    url: new URL("https://financing-e2e.app.intuit.com/embedded-financing"),
    props: {
      financingApplicationInfo: {
        loanAmount: 10000,
        loanPurpose: "HOME_IMPROVEMENT",
      },
      consumerInfo: {
        email: "csepdteam@gmail.com",
      },
    },
    style: {
      height: "100vh",
      width: "100%",
      "border-color": "red",
    },
} as const

export default IFRAME_INIT;