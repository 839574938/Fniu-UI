import {reactive} from "vue";

interface TConfig {
    uploadUrl: string,
    [propsName: string]: any,
}

const globalConfig: TConfig = reactive({
    uploadUrl: ''
});

type configKey = keyof TConfig;
export const getGlobalConfig = (key: configKey) => {
    return globalConfig[key]
}

export const setGlobalConfig = (config: Record<string, any>) => {
    for (const key of Object.keys(globalConfig)) {
        globalConfig[key] = config[key] || globalConfig[key];
    }
}
