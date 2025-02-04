import { IntuitWebAppExperience } from "@appfabric-plugin/appf-embedded-experiences/iframe";

// TODO: ADD renderWidget
class IntuitWebAppExperienceSingleton {
    private static instance: IntuitWebAppExperience | null = null;

    private constructor() {
    }

    private async initializeInstance(widget: Readonly<IntuitWebAppExperience>): Promise<void> {
      try {
          await widget.init({
              namespace: "embedded-financing",
              url: new URL(
                  "https://financing-e2e.app.intuit.com/embedded-financing"
              ),
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
          });
      } catch (error) {
          console.error("Error initializing widget: ", error);
      }
    };

    public static async getInstance(): Promise<IntuitWebAppExperience> {
        if (!IntuitWebAppExperienceSingleton.instance) {
            IntuitWebAppExperienceSingleton.instance = new IntuitWebAppExperience();
            const instance = IntuitWebAppExperienceSingleton.instance;
            await new IntuitWebAppExperienceSingleton().initializeInstance(IntuitWebAppExperienceSingleton.instance);
        }
        return IntuitWebAppExperienceSingleton.instance;
    }
}

export default IntuitWebAppExperienceSingleton;