import * as API from './index.ts';
// #region Channels
export interface CreateMessagePayload {
	content?: string;
	nonce?: string | number;
	embed?: API.APIEmbedData;
	allowed_mentions?: MessageAllowedMentions;
	tts?: boolean;
}
export interface MessageAllowedMentions {
	parse?: ('users' | 'roles' | 'everyone')[];
	roles?: string[];
	users?: string[];
}

export interface ModifyChannelPayload {
	name?: string;
	type?: API.ChannelType;
	position?: number | null;
	topic?: string | null;
	nsfw?: boolean | null;
	rate_limit_per_user?: number | null;
	bitrate?: number | null;
	user_limit?: number | null;
	permission_overwrites?: number | null;
	parent_id?: string | null;
}

export type UpdateMessagePayload = Pick<CreateMessagePayload, 'content' | 'embed' | 'allowed_mentions'> & {
	flags?: number
};

export interface BulkDeleteMessagesPayload {
	messages: string[];
}

export type EditPermissionOverwritePayload = Omit<API.APIOverwriteData, 'id'>;
export interface CreateInvitePayload {
	max_age?: number;
	max_uses?: number;
	temporary?: boolean;
	unique?: boolean;
	target_user?: string;
	target_user_type?: number;
}

export interface GroupDMAddRecipientPayload {
	access_token: string;
	nick: string;
}

export interface FollowNewsChannelPayload {
    webhook_channel_id: string;
}
// #endregion Channels
// #region Emoji
export interface CreateEmojiPayload {
	name: string;
	image: string;
	roles: string[];
}

export interface UpdateEmojiPayload {
	name: string;
	roles: string[] | null;
}
// #endregion Emoji
// #region Guilds
export interface CreateGuildPayload {
	name: string;
	region?: string;
	icon?: string;
	verification_level?: number;
	default_message_notifications?: number;
	explicit_content_filter?: number;
	roles?: API.APIRoleData[];
	// TODO(TTtie): Needs clarification on what can be passed and what cannot
	channels?: API.APIChannelData[];
	afk_channel_id?: string;
	afk_timeout?: number;
	system_channel_id?: string;
}

export interface ModifyGuildPayload {
	name?: string;
	region?: string | null;
	verification_level?: number | null;
	default_message_notifications?: number | null;
	explicit_content_filter?: number | null;
	afk_channel_id?: string | null;
	afk_timeout?: number;
	icon?: string | null;
	owner_id?: string;
	splash?: string | null;
	banner?: string | null;
	system_channel_id?: string | null;
	rules_channel_id?: string | null;
	public_updates_channel_id?: string | null;
	preferred_locale?: string | null;
}

export interface CreateChannelPayload {
	name: string;
	type?: number;
	topic?: string;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user?: number;
	position?: number;
	permission_overwrites?: API.APIOverwriteData[];
	parent_id?: string;
	nsfw?: boolean;
}

interface ModifyPositionsPayload {
	id: string;
	position: number | null;
}
export type ModifyChannelPositionsPayload = ModifyPositionsPayload[];

export interface AddGuildMemberPayload {
	access_token: string;
	nick?: string;
	roles?: string[];
	mute?: boolean;
	deaf?: boolean;
}

export interface ModifyGuildMemberPayload {
	nick?: string | null;
	roles?: string[] | null;
	mute?: boolean | null;
	deaf?: boolean | null;
	channel_id?: string | null;
}

export interface ModifyCurrentUserNickPayload {
	nick?: string | null;
}

export interface CreateGuildBanPayload {
	delete_message_days?: number;
	reason?: string;
}

export interface CreateGuildRolePayload {
	name?: string;
	permissions?: number | string;
	color?: number;
	hoist?: boolean;
	mentionable?: boolean;
}

export type ModifyGuildRolePositionsPayload = ModifyPositionsPayload[];

export interface ModifyGuildRolePayload {
	name?: string | null;
	permissions?: number | string | null;
	color?: number | null;
	hoist?: boolean | null;
	mentionable?: boolean | null;
}

export interface BeginGuildPrunePayload {
	days?: number;
	compute_prune_count?: boolean;
	include_roles?: string[];
}

export interface CreateGuildIntegrationPayload {
	type: string;
	id: string;
}

export interface ModifyGuildIntegrationPayload {
	expire_behavior?: API.IntegrationExpireBehavior | null;
	expire_grace_period?: number | null;
	enable_emoticons?: boolean | null;
}
// #endregion Guilds
// #region Users
export interface ModifyCurrentUserPayload {
	username?: string;
	avatar?: string | null;
}

export interface CreateDMPayload {
	recipient_id: string;
}

export interface CreateGroupDMPayload {
	access_tokens: string[];
	nicks: Record<string, string>;
}
// #endregion Users
// #region Webhooks
export interface CreateWebhookPayload {
	name: string;
	avatar: string | null;
}

export interface ModifyWebhookPayload {
	name?: string;
	avatar?: string | null;
	channel_id?: string;
}

export type ExecuteWebhookPayload = Omit<CreateMessagePayload, 'nonce' | 'embed'> & {
	username?: string,
	avatar_url?: string,
	embeds?: API.APIEmbedData[]
}
// #endregion Webhooks
