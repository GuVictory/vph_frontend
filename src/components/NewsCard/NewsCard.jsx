import React from 'react';
import './NewsCard.css';
import { HashLink } from '../Link/Link';
import { AuthorIcon } from '../Icon/AuthorIcon';
import { CalendarIcon } from '../Icon/CalendarIcon';
import { TimeIcon } from '../Icon/TimeIcon';
import { DiplomaIcon } from '../Icon/DiplomaIcon';

export const NewsCard = ({ ...props }) => {
    return (
        <div className={'NewsCard ' + props.className}>
            <span className={'NewsCard__type'}>{props.children[0]}</span>
            <div>
                <div className={'NewsCard__main-info'}>
                    <span className={'NewsCard__title'}>{props.children[1]}</span>
                    <div className={'NewsCard__main-info-details'}>
                        <div>
                            <CalendarIcon width={24} height={24} />
                            <strong>Начало занятий:</strong>
                        </div>

                        <span className={'NewsCard__text'}>{props.children[2]}</span>
                    </div>
                    <div className={'NewsCard__main-info-details'}>
                        <div>
                            <TimeIcon width={24} height={24} />
                            <strong>Продолжительность:</strong>
                        </div>
                        <span className={'NewsCard__text'}>{props.children[3]}</span>
                    </div>
                    <div className={'NewsCard__main-info-details'}>
                        <div>
                            <AuthorIcon width={24} height={24} />
                            <strong>Ведущий:</strong>
                        </div>

                        <span className={'NewsCard__text'}>{props.children[4]}</span>
                    </div>
                    <div className={'NewsCard__main-info-details'}>
                        <div>
                            <DiplomaIcon width={24} height={24} />
                            <strong>Документ:</strong>
                        </div>
                        <span className={'NewsCard__text'}>{props.children[5]}</span>
                    </div>
                </div>

                <div className={'NewsCard__cost-and-more'}>
                    <span className={'NewsCard__text'}>{props.children[6]}</span>
                    <HashLink path={props.children[7]} children={'Подробнее...'} />
                </div>
            </div>
        </div>
    );
};
