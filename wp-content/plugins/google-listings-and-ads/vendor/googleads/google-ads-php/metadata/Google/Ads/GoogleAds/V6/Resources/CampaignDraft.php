<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v6/resources/campaign_draft.proto

namespace GPBMetadata\Google\Ads\GoogleAds\V6\Resources;

class CampaignDraft
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();
        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\Http::initOnce();
        \GPBMetadata\Google\Api\Annotations::initOnce();
        \GPBMetadata\Google\Api\FieldBehavior::initOnce();
        \GPBMetadata\Google\Api\Resource::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
9google/ads/googleads/v6/enums/campaign_draft_status.protogoogle.ads.googleads.v6.enums"�
CampaignDraftStatusEnum"
CampaignDraftStatus
UNSPECIFIED 
UNKNOWN
PROPOSED
REMOVED
	PROMOTING
PROMOTED
PROMOTE_FAILEDB�
!com.google.ads.googleads.v6.enumsBCampaignDraftStatusProtoPZBgoogle.golang.org/genproto/googleapis/ads/googleads/v6/enums;enums�GAA�Google.Ads.GoogleAds.V6.Enums�Google\\Ads\\GoogleAds\\V6\\Enums�!Google::Ads::GoogleAds::V6::Enumsbproto3
�
6google/ads/googleads/v6/resources/campaign_draft.proto!google.ads.googleads.v6.resourcesgoogle/api/field_behavior.protogoogle/api/resource.protogoogle/api/annotations.proto"�
CampaignDraftE
resource_name (	B.�A�A(
&googleads.googleapis.com/CampaignDraft
draft_id	 (B�AH �E
base_campaign
 (	B)�A�A#
!googleads.googleapis.com/CampaignH�
name (	H�F
draft_campaign (	B)�A�A#
!googleads.googleapis.com/CampaignH�_
status (2J.google.ads.googleads.v6.enums.CampaignDraftStatusEnum.CampaignDraftStatusB�A(
has_experiment_running (B�AH�(
long_running_operation (	B�AH�:q�An
&googleads.googleapis.com/CampaignDraftDcustomers/{customer_id}/campaignDrafts/{base_campaign_id}~{draft_id}B
	_draft_idB
_base_campaignB
_nameB
_draft_campaignB
_has_experiment_runningB
_long_running_operationB�
%com.google.ads.googleads.v6.resourcesBCampaignDraftProtoPZJgoogle.golang.org/genproto/googleapis/ads/googleads/v6/resources;resources�GAA�!Google.Ads.GoogleAds.V6.Resources�!Google\\Ads\\GoogleAds\\V6\\Resources�%Google::Ads::GoogleAds::V6::Resourcesbproto3'
        , true);
        static::$is_initialized = true;
    }
}

