<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\VonageMessage;
use Illuminate\Notifications\Notification;

class SendPhoneVerificationCode extends Notification
{
    use Queueable;


    private $code;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($code)
    {
        $this->code = $code;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ["vonage"];
    }


    /**
 * Get the Vonage / SMS representation of the notification.
 */

    public function toVonage(object $notifiable): VonageMessage {
        return (new VonageMessage)
                    ->content('Verification Code: ' . $this->code->code);
    }
}
