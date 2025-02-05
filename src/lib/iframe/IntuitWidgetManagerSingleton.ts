import { IntuitWebAppExperience } from "@appfabric-plugin/appf-embedded-experiences/iframe";

// TODO: ADD renderWidget
class IntuitWebAppExperienceSingleton {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    private static intuitWebAppExperienceInstance: IntuitWebAppExperience | null = null;
    private static iframe: HTMLIFrameElement | null = null;
    private static isWidgetMounted = false;

    private constructor() {
    }

    private static async initializeInstance(instance: Readonly<IntuitWebAppExperience>): Promise<void> {
      try {
          await instance.init({
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
                    height: "100%",
                    width: "100%",
              },
          });
      } catch (error) {
          console.error(`class=IntuitWebAppExperienceSingleton function=intializeInstance, message="${error}"`, instance);
      }
    };

    public static getInstanceIframe(): HTMLIFrameElement | null {
        return IntuitWebAppExperienceSingleton.iframe;
    }
    
    public static getIsWidgetMounted(): boolean {
        return IntuitWebAppExperienceSingleton.isWidgetMounted;
    }

    public static async getInstance(): Promise<IntuitWebAppExperience> {
        if (!IntuitWebAppExperienceSingleton.intuitWebAppExperienceInstance) {
            IntuitWebAppExperienceSingleton.intuitWebAppExperienceInstance = new IntuitWebAppExperience();
            await IntuitWebAppExperienceSingleton.initializeInstance(IntuitWebAppExperienceSingleton.intuitWebAppExperienceInstance);
        }
        return IntuitWebAppExperienceSingleton.intuitWebAppExperienceInstance;
    }

    public static async renderInstance(containerId: string): Promise<HTMLIFrameElement | null> {
        const instance = IntuitWebAppExperienceSingleton.intuitWebAppExperienceInstance;
        
        if (!instance) {
            console.error(
                `class=IntuitWebAppExperienceSingleton function=renderInstance, message="Wiget instance is not created yet"`
            );
            return IntuitWebAppExperienceSingleton.iframe;
        }

        try {
                console.warn(
                    `class=IntuitWebAppExperienceSingleton function=renderInstance, message="Rendering widget" instance=`,
                    instance
                );

                const widgetContainer = document.getElementById(containerId)

                if (!widgetContainer) {
                    console.warn(`class=IntuitWebAppExperienceSingleton function=renderInstance, containerId=${containerId}, message="Could not find container", widgetContainer=`, widgetContainer)
                    return null
                }

                // TODO: Find where widget is marked as mounted
                IntuitWebAppExperienceSingleton.iframe = await instance.render(widgetContainer, {
                    onload: () => {
                        IntuitWebAppExperienceSingleton.isWidgetMounted = true;
                    }
                })

                return IntuitWebAppExperienceSingleton.iframe;
        } catch (error) {
            console.error(
                error
            );
        }

        return IntuitWebAppExperienceSingleton.iframe;
    }

    public static async unmountInstance(): Promise<void> {
        const instance = IntuitWebAppExperienceSingleton.intuitWebAppExperienceInstance;

        if (!instance) {
            console.error(
                `class=IntuitWebAppExperienceSingleton function=unmountInstance, message="Wiget instance is not created yet", instanc=`
            );
            return;
        }

        try {
            if (instance) {
                console.warn(
                    `class=IntuitWebAppExperienceSingleton function=unmountInstance, isWidgetMounted=${this.isWidgetMounted} message="Unmounting widget"`,
                    instance
                );
                await instance.unmount();
                IntuitWebAppExperienceSingleton.isWidgetMounted = false;
            }
        } catch (error) {
            console.error(
                error
            );
        }
    }
}

export default IntuitWebAppExperienceSingleton;