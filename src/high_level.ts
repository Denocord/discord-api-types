/**
 * Higher-level Discord API abstractions for Denocord
 */

import * as lowLevel from "./index.ts";

export const DATA_SYMBOL = Symbol("Denocord::Data");
export enum DataTypes {
  USER,
  GUILD,
  ROLE,
  CHANNEL,
  MEMBER,
  MESSAGE,
  UNKNOWN,
}

export interface SnowflakeBase {
    id: string;
    [DATA_SYMBOL]: DataTypes;
}

export type Guild = lowLevel.APIGuildData & {
    roles: Map<string, Role>;
    voice_states: Map<string, lowLevel.APIVoiceStatePartial>;
    members: Map<string, GuildMember>;
    channels: Map<string, Channel>;
    presences: Map<string, lowLevel.APIPresenceUpdateData>;

    [DATA_SYMBOL]: DataTypes.GUILD;
}

export interface Channel extends lowLevel.APIChannelData {
    recipients?: User[];
    [DATA_SYMBOL]: DataTypes.CHANNEL;
}

export interface User extends lowLevel.APIUserData {
    [DATA_SYMBOL]: DataTypes.USER;
}

export interface GuildMember extends lowLevel.APIGuildMemberData {
    user?: User;
    [DATA_SYMBOL]: DataTypes.MEMBER;
}

export interface Message extends lowLevel.APIMessageData {
    author: User;
    member?: GuildMember;
    mentions: MessageMention[];

    [DATA_SYMBOL]: DataTypes.MESSAGE;
}

export interface Role extends lowLevel.APIRoleData {
    [DATA_SYMBOL]: DataTypes.ROLE;
}

export type MessageMention = User & { member?: Omit<GuildMember, "user"> };

export * from "./index.ts";