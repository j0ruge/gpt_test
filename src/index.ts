import { openai } from ".lib/openai";
import { creareReadStream, readFileSync, writeFileSync } from "fs";
import path from "path";

const audio = creareReadStream(path.resolve(_dirname, "audio.mp3"));


min 11:40