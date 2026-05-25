import { WcbAttrsForSave } from "./Save";
interface Props extends WcbAttrsForSave {}

declare const WCBCountdown: any;

export function initCountDown(
	elem: Element,
	props: Props
) {
	const baseData: Record<string, any> = {
		'block_id': props.uniqueId,
		'showDays': props.general_date.show_day,
		'showHours': props.general_date.show_hour,
		'showMinutes': props.general_date.show_minute,
		'isFrontend': true,
		'redirectURL': '',
		'endDateTime': '',
		'timerEndAction': '',
	};

	if ( props.general_date.timerType === 'evergreen' ) {
		baseData.timerType = 'evergreen';
		baseData.evergreenDays = props.general_date.evergreenDays ?? 0;
		baseData.evergreenHrs = props.general_date.evergreenHrs ?? 0;
		baseData.evergreenMinutes = props.general_date.evergreenMinutes ?? 0;
		baseData.resetDays = props.general_date.resetDays ?? 30;
		baseData.campaignID = props.general_date.campaignID ?? '';
		WCBCountdown.init(`.${props.uniqueId} .wcb-countdown__content`, baseData);
	} else {
		const cd_date = (props.general_date.date as unknown as string).split("T");
		baseData.endDateTime = cd_date[0];
		baseData.timerEndAction = cd_date[1] || '';
		WCBCountdown.changeEndTime(`.${props.uniqueId} .wcb-countdown__content`, baseData);
	}
}