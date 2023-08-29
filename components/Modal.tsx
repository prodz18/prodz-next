import * as Dialog from '@radix-ui/react-dialog';
import { RxCross1 } from 'react-icons/rx';
import { ReactNode } from 'react';

export default function Modal({
	open,
	onOpenChange,
	children,
}: {
	open?: boolean;
	// eslint-disable-next-line no-unused-vars
	onOpenChange?: (open: boolean) => void;
	children: ReactNode;
}) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			{children}
		</Dialog.Root>
	);
}

function ModalContent({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
			<Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-2xl max-h-screen -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms] overflow-y-auto">
				<div className="flex items-center justify-between pb-2">
					<Dialog.Title className="text-xl">{title}</Dialog.Title>
					<Dialog.Close className="text-gray-400 hover:text-gray-500">
						<RxCross1 />
					</Dialog.Close>
				</div>

				{children}
			</Dialog.Content>
		</Dialog.Portal>
	);
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
