import { parse } from 'uuid';

export const convertGuidToInt = (uuid: any) => {
  // parse accountId into Uint8Array[16] variable
  const parsedUuid = parse(uuid);

  // convert to integer - see answers to https://stackoverflow.com/q/39346517/2860309
  const buffer = Buffer.from(parsedUuid);
  const result = buffer.readUInt32BE(0);

  return result;
};
