'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { RxCross1 } from 'react-icons/rx';
import type { ReactNode } from 'react';

export default function Modal({ open, onOpenChange, children }: { open?: boolean; onOpenChange?: (open: boolean) => void; children: ReactNode }) {
	return <Dialog.Root open={open} onOpenChange={onOpenChange}>{children}</Dialog.Root>;
}

function ModalContent({ title, children }: { title: string; children: ReactNode }) {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 z-50 bg-black/75" />
			<Dialog.Content className="fixed top-1/2 left-1/2 z-[51] max-h-[calc(100dvh-40px)] w-[min(820px,calc(100%-32px))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border border-site-line bg-site-bg p-5 text-site-text tablet:p-7" aria-describedby={undefined}>
				<div className="flex items-center justify-between gap-5">
					<Dialog.Title className="font-display text-[28px] leading-[normal] font-medium">{title}</Dialog.Title>
					<Dialog.Close className="flex size-11 shrink-0 items-center justify-center rounded-full bg-site-surface" aria-label="Close project details"><RxCross1 aria-hidden="true" /></Dialog.Close>
				</div>
				{children}
			</Dialog.Content>
		</Dialog.Portal>
	);
}
Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
