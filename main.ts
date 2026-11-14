import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Small Door" — an original poem about agency: everything handed
// to the agent, except one small thing kept back.
const POEM = `The Small Door

It remembers everything for me now:
every password, every birthday, every bill.
It signs in before I wake, it answers
before I have decided what to say.

I keep one password it doesn't know.
Six letters, my grandmother's dog, spelled
the way I spelled it at nine.
I type it wrong twice, every time,
then right, slowly, one finger at a time.

It could guess it in a second.
It never tries. It waits outside the door
I locked myself, and minds the rest of the house,
while I come in through the small one —
the one only I can open.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
