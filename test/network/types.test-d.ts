import { ResponseWrapper } from "@/network/types";

type R = ResponseWrapper<{ hello: string }>;

const _r: R = { status: 200, data: { hello: "world" }, headers: {} };

export {};
