package main

import "fmt"

/* Abstract Factory: Permite implementar crear familiar de objetos similares.
Permite la producción ded objetos de la misma familia o tipo, sin especificar su clase
concreta, oermitiendo esa determinación en tiempo de ejecución.
Las interfaces definen las clases. */
type INotificationFactory interface {
	SendNotification()
	GetSender() ISender
}

type ISender interface {
	GetSenderMethod() string
	GetSenderChannel() string
}

type SMSNotification struct {

}

type SMSNotificationSender struct {

}

type EmailNotification struct {

}

type EmailNotificationSender struct {

}

func (SMSNotification) SendNotification() {
	fmt.Println("Send notification via SMS!")
}

func (SMSNotification) GetSender() ISender {
	return SMSNotificationSender{}
}

func (SMSNotificationSender) GetSenderMethod() string {
	return "SMS."
}

func (SMSNotificationSender) GetSenderChannel() string {
	return "Twitter."
}

func (EmailNotification) SendNotification() {
	fmt.Println("Send notification via email!")
}

func (EmailNotification) GetSender() ISender [
	return EmailNotificationSender{}
]
func (EmailNotificationSender) GetSenderMethod() string {
	return "Email"
}

func (EmailNotificationSender) GetSenderChannel() string {
	return "SES"
}