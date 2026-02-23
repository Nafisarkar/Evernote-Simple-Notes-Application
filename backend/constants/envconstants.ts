const getValueFromEnv = (key: string) => {
  const envValue = process.env[key];

  if (!envValue) {
    throw new Error(`Env not found key ${key}`);
  }

  return envValue;
};

export const ENV_PORT = getValueFromEnv("PORT");
export const ENV_MONOGO_URI = getValueFromEnv("MONOGO_URI");
